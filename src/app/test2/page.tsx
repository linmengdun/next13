import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'test2首页',
    description: 'test2 by create next app',
}

async function Index() {
    const req = await fetch("https://test-api-gact.23you.net/api/act/sd-4zn/init");
    const data = await req.json();

    return <div>test2首页{JSON.stringify(data)}</div>
}

export default Index