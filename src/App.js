import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

function App()
{
    const [select1,setselect1] = useState();
    const [select2,setselect2] = useState();
    const [select3,setselect3] = useState();
    const [inputarr,setInputarr]=useState([])
    const [input,setinput]=useState([]);

    const handlecancel = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      function handlecheck(e)
      {
        const test_type=select1;
        const UA_id=select2;
        const target_id = select3;
        const data = {test_type,UA_id,target_id}
        setinput([...input,data]);
        if(test_type!=="" && UA_id!=="" && target_id!=="")
        {
          setInputarr([...inputarr,data])
          console.log(test_type);
          console.log(UA_id);
          console.log(target_id);
        }
        localStorage.setItem('data',JSON.stringify(inputarr));
        console.log(inputarr);
        setselect1("")
        setselect2("")
        setselect3("")
      } 
    
      const handlepublish=(e)=>{
        
        // const input=inputdata.input;
        // const desc=inputdata.desc;
        // const data = {input,desc};
        // if(input!=="" && desc!=="")
        // {
        //   setInputarr([...inputarr,data])
        //   console.log(input);
        //   console.log(desc);
        //   console.log(inputarr);
        // }
        // localStorage.setItem('data',JSON.stringify(inputarr));
        // SetInputdata({
        //   input: "",
        //   desc: ""
        // });
      }

    return(
        <div>
          <div className='up-side'>
            <h4>Test Policy</h4>
            <div className='option'>

                <div className='dropdown'>
                    <select name='test_type' value = {select1} onChange={e => setselect1(e.target.value)}>
                        <option>Select-Test-Type</option>
                        <option>Checking Permission</option>
                        <option>Checking Login</option>
                        <option>Checking Log out</option>
                        <option>Checking Entry</option>
                    </select>
                    <label>{select1}</label>
                </div>

                <div className='dropdown'>
                    <select name='UA_id' value = {select2} onChange={e => setselect2(e.target.value)}>
                        <option>Select-UA_id</option>
                        <option>1234</option>
                        <option>2345</option>
                        <option>3456</option>
                        <option>4567</option>
                    </select>
                    <label>{select2}</label>
                </div>

                <div className='dropdown'>
                <select name='target_id' value = {select3} onChange={e => setselect3(e.target.value)}>
                    <option>Select-Target_id</option>
                    <option>key</option>
                    <option>webpage</option>
                    <option>mobile</option>
                    <option>url</option>
                </select>
                <label>{select3}</label>
                </div>
            </div>

            <div className="Box">
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          
            <Button className="btn1"
              variant="contained"
              onClick={handlecheck}
              sx={{ mr: 1 }}
              >
              Check
            </Button>
            </Box>
            </div>
          </div>
          <div className='mid'>

          <table className='table' border={1} cellPadding={10}>
            <tbody>
            <tr className='title'>
                <td>test_type</td>
                <td>UA_id</td>
                <td>target_id</td>
            </tr>
            {
                inputarr.map(
                  (info,ind)=>{
                    return(
                      <tr key={ind}>
                                <td>{info.test_type}</td>
                                <td>{info.UA_id}</td>
                                <td>{info.target_id}</td>
                            </tr>
                            )
                          }
                          )
                        }
            </tbody>
          </table>
          
          </div>
          <div className="Box1">

          <Box sx={{ flex: '1 1 auto' }} >
            <Button className="btn2" onClick={handlecancel}>
              Cancel
            </Button>
            <Button className="btn3" variant="contained"  onClick={handlepublish}>
              Publish
            </Button>  
          </Box>
          </div>
        </div>
 
    );
}

export default App;
 
