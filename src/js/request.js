const request = async(resource) => {
    console.log('loading...');
    const req = await fetch(resource)
    const data = await req.json()
    console.log('Done !');
    return data
}

export default request