import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/seo'
import Search from '../components/Search'

const algolia = {
  appId: "R2PQCR1ST9",
  searchOnlyApiKey: "c352a69250ff2d9bab2e894f7e6c2c41",
  indexName: "Post"
}

const SearchPage = props => {
  return (
    <Layout>
      <SEO
        title="Search"
        description="Vai lá, não tenha medo. Busque por posts novos e bem antigos."
      />
      <Search algolia={algolia} />
    </Layout>
  )
}

export default SearchPage