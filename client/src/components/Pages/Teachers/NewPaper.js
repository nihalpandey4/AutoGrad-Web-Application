import NavBar from "../../NavBar";
import {Field,reduxForm} from "redux-form";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";

import QandABlock from "../../QandABlock";
import {createTest} from "../../../actions";


class NewPaper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qA:[],
            currentQA:{
                question:"",
                answer:"",
                maxMarks:"",
                key:""
            }
        }
    }
}

export default NewPaper;