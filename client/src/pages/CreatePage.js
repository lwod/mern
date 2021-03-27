import React, {useState} from "react";

export const CreatePage = () =>{

	const [link, setLink] = useState(null)

	return(
		<div className={'row'}>
			<div className={"col s8 offset-s2"} style={{paddingTop: '2rem'}}>
				<input
					placeholder={"Вставьте ссылку"}
					id={"link"}
					type={"text"}
					// onChange={}
				/>
				<label htmlFor={'link'}></label>
				
			</div>
		</div>
	)
}
