import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Rating from "@mui/material/Rating"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Switch from "@mui/material/Switch"
import { ContainerListRatings } from "./style"

export const Skill = (title, icon, array) => {
	const [ratingVisible, setRatingVisible] = useState(false)

	const handleToggle = () => {
		setRatingVisible(!ratingVisible)
	}

	return (
		<>
			<List sx={{ width: "100%", maxWidth: 360 }}>
				<ListItem>
					<ListItemIcon>
						{icon}
					</ListItemIcon>
					<ListItemText primary={title}/>
					<Switch
						edge="end"
						onChange={handleToggle}
						checked={ratingVisible}
					/>
				</ListItem>
			</List>

			{ratingVisible && (
				<>
					<ContainerListRatings>
						{array.map((item) => (
							<div key={item.text}>
								<Typography component="legend">
									{item.text} {item.icon}
								</Typography>
								<Rating value={item.rating} size="large" readOnly />
							</div>
						))}
					</ContainerListRatings>
				</>
			)}
		</>
	)
}