const data = require('../data2.json')
const Example3 = props => {
    const Experience = data['Experiences']
    return (
        <>
            <h3>Experience:</h3>
            <>
                {
                Experience.map((item, i)=>{
                    return (
                        <>
                            <img src={item.logo}/>
                            <a href={item.url}><h3>{`${item['companyName']}`}</h3></a>
                        {
                            item.roles.map((roles)=> {
                                return (
                                    <ul>
                                        <li>{roles.title}</li>
                                        <li>{roles.endDate} | {roles.location}</li>
                                        <li>{roles.description}</li>
                                    </ul>
                                )
                            })
                        }
                        </>
                    )
                })
                }
            </>
        </>
    )
}

export default Example3