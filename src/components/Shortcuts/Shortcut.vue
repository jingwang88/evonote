<template>
	<div class="panel panel-shortcut">
		<h2 class="panel-shortcut-heading">快捷方式</h2>
		<ul class="panel-shortcut-content">
			<li v-for="shortcut in shortcuts">
				<i class="note-icon"></i>
				<p>{{ shortcuts.title }}</p>
				<i class="del-icon"></i>
			</li>
		</ul>
		<div class="panel-shortcut-background">
			<img src="../../assets/images/Image-gwt.png" class="Image-shortcut">
			<p>工作更高效</p>
			<p>移动鼠标至列表中的某个笔记或笔记本，并点击<span class="Icon-shortcut"></span>创建快捷方式。</p>
		</div>
	</div>
</template>
<style lang="less">
	.panel-shortcut {
		width: 456px;

	}
	.panel-shortcut-heading {
		padding: 24px;
		font-family: gotham, helvetica, arial, sans-serif;
		font-size: 21px;
		font-weight: 300;
		color: #878787;
	}
	.panel-shortcut-content {
		padding: 0;
		list-style: none;
	}
	.Icon-shortcut {
		background-image: url("../../assets/images/Icon-shortcut.png");
	}
</style>
<script>
	export default {
		data() {
			return {
				shortcuts: [{title: '例子头部信息'}],
			}
		},
		methods: {
			hadleDelete () {

			},
			handleNoteHover () {

			},
			handleDelHover () {

			}
		}
	}
</script>