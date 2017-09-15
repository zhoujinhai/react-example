import React from 'react';
import {Form, Cascader, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;


class TheForm extends React.Component{
	constructor(props){
		super(props),
		this.state = {
			visible: false
		}
	}

	//选择select
	handleSelectChange(value){
		console.log(`selected ${value}`);
	}

	//提交表单
	handleSubmit(e){
		e.preventDefault();
		console.log('表单值：',this.props.form.getFieldsValue());
		this.props.form.resetFields();
	}

	//显示弹出框
	showModal(){
		this.setState({visible:true});
	}

	//隐藏弹出框
	hideModel(){
		this.setState({visible:false});
	}

	render(){
		const {getFieldDecorator} = this.props.form;

		const formItemLayout = {
			labelCol: {span:3},
			wrapperCol: {span:6}
		};

		const success = function(){
			message.success('提交成功');
		};

		// 级联选择 内容
		const Contents = [{
			value: '湖南',
			label: '湖南',
			children:[{
				value: '长沙',
				label: '长沙',
				children: [{
					value: '雨花区',
					label: '雨花区'
				},{
					value: '天心区',
					label: '天心区'
				}],
			},{
				value: '湘潭',
				label: '湘潭',
				children: [{
					value: '雨湖区',
					label: '雨湖区'
				},{
					value: '岳塘区',
					label: '岳塘区'
				},{
					value: '九华',
					label: '九华'
				}],
			}],
		}];

		const handleCascaderChange = function(value){
			console.log(value);
		}

		return (
			<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
				<FormItem id="control-input" label="输入框" {...formItemLayout} required>
					<Input id="control-input" placeholder="请输入..." {...getFieldDecorator('userName')} />
				</FormItem>

				<FormItem label="日期选择框" labelCol={{span:3}} required>
					<Col span="2">
						<FormItem>
							<DatePicker {...getFieldDecorator('startDate')} />
						</FormItem>
					</Col>
					<Col span="1">
						<p className="ant-form-split">-</p>
					</Col>
					<Col span="2">
						<FormItem>
							<DatePicker {...getFieldDecorator('endDate')} />
						</FormItem>
					</Col>
				</FormItem>

				<FormItem id="control-textarea" label="文本框" {...formItemLayout} >
					<Input type='textarea' id="control-textarea" rows="4" {...getFieldDecorator('content')} />
				</FormItem>

				<FormItem label="级联选择" {...formItemLayout}>
					<Cascader options={Contents} changeOnSelect onChange={this.handleCascaderChange} placeholder="请选择">
					</Cascader>
				</FormItem>

				<FormItem id="select" label="选择器" {...formItemLayout}>
					<Select id="select" size="large" defaultValue="湘潭" style={{width:200}} onChange={this.handleSelectChange} {...getFieldDecorator('地名')} >
						<Option value="长沙">长沙</Option>
						<Option value="株洲">株洲</Option>
						<Option value="湘潭">湘潭</Option>
						<Option value="衡阳">衡阳</Option>
						<Option value="邵阳">邵阳</Option>
						<Option value="湘西">湘西</Option>
					</Select>
				</FormItem>

				<FormItem label="多选框" {...formItemLayout}>
					<Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem1')}>选项1</Checkbox>
					<Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem2')}>选项2</Checkbox>
					<Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem3')}>选项3</Checkbox>
					<Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem4')}>选项4</Checkbox>
				</FormItem>

				<FormItem label="单选框" {...formItemLayout}>
					<RadioGroup defaultValue="b" {...getFieldDecorator('radioItem')}>
						<Radio value="a">A</Radio>
						<Radio value="b">B</Radio>
						<Radio value="c">C</Radio>
						<Radio value="d">D</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem wrapperCol={{span:6,offset:3}} style={{marginTop:25}}>
					<Button type="primary" htmlType="submit" onClick={success}>提交</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<Button type="ghost" onClick={this.showModal.bind(this)}>弹出modal框</Button>
				</FormItem>

				<Modal title="提示信息" visible={this.state.visible} onOk={this.hideModel.bind(this)} onCancel={this.hideModel.bind(this)}>
					您确定删除这条信息吗？
				</Modal>
            </Form>
		)
	}
}

TheForm = Form.create()(TheForm);

export default TheForm;