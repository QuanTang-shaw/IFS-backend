import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import Avatar from './UpLoad.js'


const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];
// const FactoryForm=(props)=>
class FactoryForm extends React.Component{
    // console.log(props)
    constructor(props) {
        super(props);
        console.log("来自继承:",props)
    }
    state = {
        confirmDirty: false,
    };
    componentDidMount(){
        const {factoryEditData}=this.props;
        console.log('willmount',this.props.factoryEditData);
        console.log("设置:",this.props.form.setFieldsValue);
        this.props.form.setFieldsValue({name:factoryEditData.name});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.dispatch({
                    type:'factoryList/FactoryEditUpdate',
                    payLoad:values
                })
                this.props.dispatch({
                    type:'factoryList/toggleModal'
                })
            }
        });
    }
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({
        confirmDirty: this.state.confirmDirty || !!value
      });
    }
    checkPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
    checkConfirm = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], {
          force: true
        });
      }
      callback();
    }
    getValue=()=>{
        const { getFieldsValue} = this.props.form;
        // alert('get');
        console.log(getFieldsValue())
    }
    resetForm=()=>{
        const { resetFields} = this.props.form;
        resetFields();
    }

    render() {
    const { getFieldDecorator} = this.props.form;
    const formItemLayout = {
        labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
        },
        wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 14,
            offset: 6,
        },
        },
    };
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select className="icp-selector">
        <Option value="86">+86</Option>
        </Select>
    );
    return (
        <Form onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="名称"
            hasFeedback
        >
            {getFieldDecorator('name', {
            rules: [{
                type: 'string', message: '必须是字符串',
            }, {
                required: true, message: '请输入工厂名称',
            }],
            })(
            <Input />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="地址"
            hasFeedback
        >
            {getFieldDecorator('address', {
            rules: [{
                required: true, message: 'Please input your password!',
            }, {
                validator: this.checkConfirm,
            }],
            })(
            <Input/>
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="工厂描述"
            hasFeedback
        >
            {getFieldDecorator('descript', {
            rules: [{
                required: true, message: 'Please confirm your password!',
            }],
            })(
            <Input type="textarea" rows={4} />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="工厂图片"
            hasFeedback
        >
            {/* {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!' }],
            })(
            )} */}
            <Avatar/>
        </FormItem>
       {/*  <FormItem
            {...formItemLayout}
            label="Habitual Residence"
        >
            {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
            })(
            <Cascader options={residences} />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Phone Number"
        >
            {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
            <Input addonBefore={prefixSelector} />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Captcha"
            extra="We must make sure that your are a human."
        >
            <Row gutter={8}>
            <Col span={12}>
                {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                <Input size="large" />
                )}
            </Col>
            <Col span={12}>
                <Button size="large">Get captcha</Button>
            </Col>
            </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            })(
            <Checkbox>I have read the <a>agreement</a></Checkbox>
            )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">Register</Button>
        </FormItem> */
        }
        <Button onClick={this.handleSubmit}>提交</Button>
        <Button onClick={this.resetForm}>重置</Button>
        </Form>
    );
    }
}
const WrappedFactoryForm = Form.create()(FactoryForm);
// export default WrappedFactoryForm;
export default connect()(WrappedFactoryForm);
