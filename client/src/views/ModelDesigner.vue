<template>
  <model-designer :service="serviceInfo"></model-designer>
</template>

<script>
import { ModelDesigner } from "vnatk-vue";
import api from "../service/api";

export default {
  name: "ModelDesignerPage",
  components: {
    ModelDesigner,
  },
  data() {
    return {
      serviceInfo: {
        service: api,
        basepath: "/admin/vnatk",
      },
    };
  },
};
</script>
