import React from 'react'
import SEO from '../components/seo'
import LeadMagnet from '../components/leadmagnet'
import CaseStudy from '../components/homecasestudysection'
import Masthead from '../components/masthead'
import Pricing from '../components/pricing-section'
import BlogSummary from '../components/blog-summary'
import Testimonial from '../components/testimonial-section'
import Consultation from '../components/consultation'

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Masthead />

    <LeadMagnet />

    <CaseStudy />

    <Pricing />

    <Testimonial />

    <BlogSummary />
  </>
)

export default IndexPage
