import * as React from 'react';
import {useState, useCallback,useEffect} from 'react';
import {Form, Modal, Button, Upload, message, Alert} from "antd";
import {UploadOutlined} from '@ant-design/icons';
import {UploadChangeParam} from "antd/lib/upload/interface";
import {FormInstance} from "antd/lib/form";

const UploadFile: React.FC<any> = ({disabled, value, onChange}) => {
  const onFileChange = useCallback(({file: currentFile, fileList}: UploadChangeParam) => {
    if (fileList.includes(currentFile)) {
      currentFile.status = "success";
      onChange(currentFile);
    } else {
      onChange(undefined);
    }
  }, []);
  return (
    <Upload accept=".xlsx"
            fileList={value ? [value] : undefined}
            disabled={disabled}
            customRequest={() => null}
            onChange={onFileChange}>
      <Button>
        <UploadOutlined/> 上传的EXCEL
      </Button>
    </Upload>
  )
};

interface ModalFormProps {
  setFormInstance(formInstance: FormInstance): void
  onUploadFailed(value: string): void
}

const ModalForm: React.FC<ModalFormProps> = ({setFormInstance, onUploadFailed}) => {
  const [form] = Form.useForm();
	useEffect(() => {
    setFormInstance(form)
  },[]);
  return <Form form={form} layout="horizontal">
    <Form.Item label="上传的excel"
               name="file"
               required>
      <UploadFile/>
    </Form.Item>
    <Form.Item>
      <Alert type="warning"
             message="注意："
             description={
               <ul style={{marginLeft: '3em'}}>
                 <li>只能发布语言更新的标签</li>
                 <li>若发布到多个平台，那么平台之间需要用 / 分割，如：BIGO_ADS/BIGO_GD（平台名称需要全部大写字母，下划线连接）</li>
               </ul>
             }/>
    </Form.Item>
  </Form>
};

interface ModalProps {
  visible: boolean,
  setVisible(value: boolean): void
}

const BatchTagModal: React.FC<ModalProps> = ({visible, setVisible}) => {

  const [formInstance, setFormInstance] = useState<FormInstance>();
  const [uploadError, setUploadError] = useState<string>('');

  const tryUpdateTag = () => {
    const myFile = formInstance?.getFieldsValue()?.file;
    if (!myFile) {
      message.warning('请选择文件');
      return;
    }
    const formData = new FormData();
    formData.append('file', myFile.originFileObj);
		message.success('批量更新成功');
  };


  return <Modal title="批量上线"
                visible={visible}
                maskClosable={false}
                okText="提交"
                onOk={tryUpdateTag}
                onCancel={() => setVisible(false)}>
    {
      uploadError ?
        <div style={{textAlign: 'center'}}>
          <h5>导入失败！</h5>
          <p style={{marginBottom: '14px'}}>{uploadError}</p>
          <Button onClick={() => setUploadError('')}
                  type="primary"
          >确定</Button>
        </div> :
        <ModalForm
          setFormInstance={setFormInstance}
          onUploadFailed={setUploadError}/>
    }
  </Modal>
};

export default BatchTagModal;
