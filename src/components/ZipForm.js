import React from "react"

function ZipForm(props) {
    return (
        <div>
          <form >
          <label>Zip Code:</label>
            <input
                id="zippy"
                type="text"
                placeholder="Try 10016"
                onChange={props.handleChange}
                  />
          </form>
        </div>
    )
}

export default ZipForm
