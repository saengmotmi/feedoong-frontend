// /**
//  * NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
//  *
//  * NOTE: If using this with `next` version 12.2.0 or lower, uncomment the
//  * penultimate line in `CustomErrorComponent`.
//  *
//  * This page is loaded by Nextjs:
//  *  - on the server, when data-fetching methods throw or reject
//  *  - on the client, when `getInitialProps` throws or rejects
//  *  - on the client, when a React lifecycle method throws or rejects, and it's
//  *    caught by the built-in Nextjs error boundary
//  *
//  * See:
//  *  - https://nextjs.org/docs/basic-features/data-fetching/overview
//  *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
//  *  - https://reactjs.org/docs/error-boundaries.html
//  */

import type { NextPage, NextPageContext } from 'next'
import NextErrorComponent, { type ErrorProps } from 'next/error'
import * as Sentry from '@sentry/nextjs'

type GetInitialPropsResult = ErrorProps & { stuff?: string }

const CustomErrorComponent: NextPage<GetInitialPropsResult> = (
  props: GetInitialPropsResult
) => {
  // people might still have this
  Sentry.captureUnderscoreErrorException(props) // I would expect this to error in TS

  console.log(props.stuff)

  return <NextErrorComponent statusCode={props.statusCode} />
}

CustomErrorComponent.getInitialProps = async (
  contextData: NextPageContext
): Promise<GetInitialPropsResult> => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData)

  // This will contain the status code of the response
  const result = NextErrorComponent.getInitialProps(
    contextData
  ) as GetInitialPropsResult
  // IRL this would probably come from a 'fetch' call
  result.stuff = 'things'
  return result
}

export default CustomErrorComponent
