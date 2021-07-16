import { Button } from 'antd';
import { withRouter, } from "react-router";
function Index(props:any) {
    function handleBack() {
        props.history.replace("/")
      }
    return <>
      <Button style={{ marginRight: 20 }} onClick={handleBack}>返回首页</Button>
    </>
  }
export default withRouter(Index);