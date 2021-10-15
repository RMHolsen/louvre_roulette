import React from 'react'

class ArtworkInput extends React.Component {
    render() {
        return(
            <div>
                <form>
                <p><input type="text" name="title" placeholder="Title Your Artwork" /></p>
                <p><input type="text" name="medium" placeholder="Artwork Medium" /></p>
                <p><input type="text" name="style" placeholder="Art Style" /></p>
                <p><input type="text" name="subject" placeholder="Art Subject" /></p>
                <p><input type="integer" name="hours" placeholder="Hours Spent" /></p>
                <p><input type="submit" /></p>
                </form>
            </div>
        )
    } 

    // more complex form, since artwork carries a lot of attributes
}

export default ArtworkInput