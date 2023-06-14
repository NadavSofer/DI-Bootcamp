const data = require('../data2.json')
const Example1 = props => {
    const SocialMedias = data['SocialMedias']
    console.log(SocialMedias);
    return (
        <>
            <h3>Social Medias:</h3>
            <>
                {
                SocialMedias.map((item, i)=>{
                    return (
                    <ul>
                        <li key={i}>{item}</li>
                    </ul>
                    )
                })
                }
            </>

        </>
    )
}

export default Example1