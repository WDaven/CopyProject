import React from "react";
import { TextArea, Box  } from "native-base";


const ReviewBox = ({userReview, setUserReview}) => {
    return (
            <TextArea 
                    w="75%"             
                    placeholder="Write a review!" size="lg" multiline={true} totalLines={7}
                    value={userReview}
                    onChangeText={text => setUserReview(text)}
            >
            </TextArea>
    )
}

export default ReviewBox;