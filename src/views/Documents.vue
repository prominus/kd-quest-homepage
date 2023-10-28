<template>
    <div class="documents">
        <h1>Documents</h1>
        <pdf
            :src="pdfUrl"
            :page="1"
        ></pdf>
    </div>
</template>

<script>
import { pdf, pdfUrl } from "vue-pdf";

export default {
    data() {
        return {

        };
    },
    components: {
        pdf,
    },
};
</script>