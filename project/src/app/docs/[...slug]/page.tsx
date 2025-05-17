export default async function Docs({ params } : {
    params : Promise<{slug: string[]}>
}) {
    const {slug} = await params
    console.log(slug)
    if (slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        )
    } else if (slug.length === 1) {
        return (
            <h1>
                Reviewing docs for feature {slug[0]}
            </h1>
        )
        
    }
}