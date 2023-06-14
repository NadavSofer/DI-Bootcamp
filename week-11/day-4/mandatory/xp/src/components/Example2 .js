const data = require('../data2.json')
const Example2 = props => {
    const Skills = data['Skills']
    return (
        <>
            <h3>Social Medias:</h3>
            <>
                {
                Skills.map((item, i)=>{
                    return (
                        <>
                            <h3>{`${item['Area']}:`}</h3>
                        {
                            item.SkillSet.map(skill=> {
                                return (
                                    <ul>
                                        <li>{skill.Name}</li>
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

export default Example2