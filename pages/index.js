import * as React from 'react';
import stylesheet from 'antd/dist/antd.min.css'
import Head from 'next/head'

import Dashboard from "../containers/Dashboard";


export default class App extends React.Component {
  render() {
    return (
    <>
      <Head>
        <title>SpaceX Launch Dashboard</title>
        <meta name="theme-color" content="#F2F2F2" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Dashboard/>
    </>
    )
  }
}