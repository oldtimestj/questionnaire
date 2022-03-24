<!--
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2022-03-22 14:00:13
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-25 07:29:18
-->
<template>
  <div style="margin:20px">
    <p class="title">反洗钱调查问卷</p>
    <p class="sub-title">一、反洗钱制度流程体系</p>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      v-loading="isSubmitting"
      label-width="600px"
    >
      <el-form-item
        label="1、贵机构是否对识别并上报异常和可疑交易做出制度性规定？"
        prop="isReport"
      >
        <el-radio-group v-model="ruleForm.isReport">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="2、贵机构是否监测客户的异常和可疑交易行为？（如贵机构使用自有资金与我司开展衍生交易，可豁免填写）"
        prop="isMonitor"
      >
        <el-radio-group v-model="ruleForm.isMonitor">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="3、对于监测出来的异常和可疑交易行为，是否经过识别确定可疑后向监管机构报告？"
        prop="isIdentify"
      >
        <el-radio-group v-model="ruleForm.isIdentify">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="4、贵机构大额交易和可疑交易监控是通过人工进行还是自动进行的？ "
        prop="isAutomation"
      >
        <el-radio-group v-model="ruleForm.isAutomation">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="5、贵机构是否按反洗钱法律法规的要求向中国反洗钱监测分析中心报送大额交易？"
        prop="isSubmission"
      >
        <el-radio-group v-model="ruleForm.isSubmission">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="6、在与客户建立业务关系或开展交易活动前，贵机构是否制订和实施了对照政府或国际组织发布的制裁名单（已知或嫌疑的恐怖分子和贩毒分子等）来筛选客户信息的制度或流程？"
        prop="isFormulate"
      >
        <el-radio-group v-model="ruleForm.isFormulate" prop="isFormulate">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="7、贵机构对相关制裁名单人员是否设置客户准入/禁止审批程序？"
        prop="isAccess"
      >
        <el-radio-group v-model="ruleForm.isAccess">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <p class="sub-title">二、业务信息</p>
      <el-form-item
        label="1、贵机构是否在主要注册和监管机构以外的国家/地区设有机构？"
        prop="isOutboundRegister"
      >
        <el-radio-group v-model="ruleForm.isOutboundRegister">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        v-if="ruleForm.isOutboundRegister === '1'"
        label="请列明境外分支机构或子公司所在地:"
        prop="registerArea"
        label-width="200px"
      >
        <el-input type="textarea" v-model="ruleForm.registerArea"> </el-input>
      </el-form-item>
      <el-form-item
        label="2、贵机构是否在伊朗、朝鲜设有分支机构？或者在这些国家拥有资产或投资？或是否有任何当前的意图开始或扩大您的业务在这些国家？"
        prop="isIran"
      >
        <el-radio-group v-model="ruleForm.isIran">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        v-if="ruleForm.isIran === '1'"
        label="请详述信息:"
        prop="specificInformation"
        label-width="200px"
      >
        <el-input type="textarea" v-model="ruleForm.specificInformation">
        </el-input>
      </el-form-item>
      <el-form-item
        label="3、贵机构或任何分支机构或附属机构是否在金融行动特别工作组认为是“需要加强监控”的国家开展业务？（例如：阿尔巴尼亚、巴巴多斯、博茨瓦纳、布基纳法索、柬埔寨、开曼群岛、海地、牙买加、马耳他、毛里求斯、摩洛哥、缅甸、尼加拉瓜、巴基斯坦、巴拿马、菲律宾、塞内加尔、南苏丹、叙利亚、乌干达、也门、津巴布韦）"
        prop="isStrengthenMonitoring"
      >
        <el-radio-group v-model="ruleForm.isStrengthenMonitoring">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        v-if="ruleForm.isStrengthenMonitoring === '1'"
        label="请回答国家名称:"
        prop="countryName"
        label-width="200px"
      >
        <el-input type="textarea" v-model="ruleForm.countryName"> </el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button plain size="medium" @click="handleCancel()">撤销</el-button>
      <el-button type="primary" size="medium" @click="handleSubmit('ruleForm')"
        >提交</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'questionnaire',
  data() {
    return {
      ruleForm: {
        isReport: '',
        isMonitor: '',
        isIdentify: '',
        isAutomation: '',
        isSubmission: '',
        isFormulate: '',
        isAccess: '',
        isOutboundRegister: '',
        registerArea: '',
        isIran: '',
        specificInformation: '',
        isStrengthenMonitoring: '',
        countryName: '',
      },
      rules: {
        isReport: [{ required: true, message: '请选择' }],
        isMonitor: [{ required: true, message: '请选择' }],
        isIdentify: [{ required: true, message: '请选择' }],
        isAutomation: [{ required: true, message: '请选择' }],
        isSubmission: [{ required: true, message: '请选择' }],
        isFormulate: [{ required: true, message: '请选择' }],
        isAccess: [{ required: true, message: '请选择' }],
        isOutboundRegister: [{ required: true, message: '请选择' }],
        isIran: [{ required: true, message: '请选择' }],
        isStrengthenMonitoring: [{ required: true, message: '请选择' }],
        registerArea: [{ required: true, message: '请填写' }],
        specificInformation: [{ required: true, message: '请填写详细信息' }],
        countryName: [{ required: true, message: '请填写国家名称' }],
      },
      isSubmitting: false,
    };
  },
  methods: {
    handleCancel() {
      this.ruleForm = {};
    },
    handleSubmit(ruleForm) {
      this.$refs[ruleForm].validate(async (valid) => {
        if (!valid) {
          return;
        }
        this.$message({
          message: '感谢您拨冗参加本次问卷调研！',
          type: 'success',
        });
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.title {
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: left;
}
.sub-title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: black;
  width: 600px;
  background: #e1e1e1;
}
.el-form >>> .el-form-item__label {
  text-align: left !important;
}
.el-form >>> .el-form-item__error {
  left: -570px !important;
}
</style>
