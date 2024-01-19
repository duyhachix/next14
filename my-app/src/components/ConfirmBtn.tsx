import React from "react";
import { Button } from '@nextui-org/button';

interface ConfirmBtnProps {
	name: string;
}

const ConfirmBtn: React.FC<ConfirmBtnProps> = (props) => (
	<div>
		<Button color="primary">
			{props.name}
		</Button>
	</div>
);

export default ConfirmBtn;
