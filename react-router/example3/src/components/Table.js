import React from 'react';
import {Table ,Icon} from 'antd';

class TheTable extends React.Component{
	//定义TheTable的构造函数
	constructor(props){
		//调用父类的构造函数
		super(props);
		this.state = {
			tableData: [],
			selectedRows:[]
		};
	}

	//产生表格数据
	componentDidMount(){
		const data = [];
		for(let i=0;i<50;i++){
			data.push({
				key:i,
				name:`用户${i+1}`,//带变量的字符串
				age: Math.floor(Math.random()*11)+20,//产生20~30之间的整数
				address: `大学里${i+1}号`,
				operate: 'https://github.com/zhoujinhai/react-example/tree/master/react-router'
			});
		}
		this.setState({
			tableData: data
		})
	}

	//checkbox状态
	onSelectChange(selectedRows){
		console.log('selectedRows changed: ',selectedRows)
		this.setState({selectedRows})
	}

	render(){
		const columns = [{
			title:'姓名',
			width: '20%',
			dataIndex: 'name'
		},{
			title:'年龄',
			width: '20%',
			dataIndex: 'age'
		},{
			title:'地址',
			width: '40%',
			dataIndex: 'address'
		},{
			title:'操作',
			width: '20%',
			dataIndex: 'operate',
			render(text){
				return <a href={text} target="_blank">查看</a>
			}
		}];

		const {selectedRows} = this.state;

		const rowSelection = {
			selectedRows,
			onChange: this.onSelectChange.bind(this)
		};

		const pagination = {
			total: this.state.tableData.length,
			showSizeChanger: true,
			onShowSizeChange(current,pageSize){
				console.log('current:',current,'; pageSize:',pageSize);
			},
			onChange(current){
				console.log('current:',current);
			}
		}

		return (
			<Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tableData} bordered pagination={pagination} />
		);
	}
};

export default TheTable;