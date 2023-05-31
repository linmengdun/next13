async function Index({ params }: any) {

    return <div>test2首页{JSON.stringify(params)}{params.slug}</div>
}

export default Index