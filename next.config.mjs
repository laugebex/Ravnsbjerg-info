/** @type {import('next').NextConfig} */
const nextConfig={
  async redirects(){return[
    {source:'/bestyrelsesmedlemmer',destination:'/#bestyrelsen',permanent:true},
    {source:'/hjertestarter',destination:'/#hjertestarter',permanent:true},
    {source:'/generalforsamlingen',destination:'/generalforsamling',permanent:true},
    {source:'/om-grundejerforeningen',destination:'/',permanent:true}
  ]}
}

export default nextConfig
