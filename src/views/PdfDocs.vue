<template>
    <h1>PDF Documents</h1>
    <div v-if="isLoggedIn">
        <h2>Book/Chapter List</h2>
        <ul class="list-inline">
            <li class="list-inline-item py-4 px-3 mx-auto" v-for="book in bookCollection">
                <div class="panel-group mx-auto">
                    <div class="panel-heading">
                        <!-- @vue-skip -->
                        <h4 class="panel-title">{{ book.id }}</h4>
                    </div>
                    <div id="test" class="panel-body">
                        <ul class="list-group px-2">
                            <!-- @vue-ignore -->
                            <li class="list-group-item mx-2 px-auto" v-for="(chapter in book.data().Chapters">
                            <li v-for="(pdf_name, display_name) in chapter">
                                <!-- @vue-ignore -->
                                <button class="nav-link" @click="handlePdfSelected(book.id, pdf_name)">{{ display_name }}</button>
                            </li>
            </li>
        </ul>
    </div>
    </div>
    </li>
    </ul>
    </div>
    <div v-else>
        <h5>Please login to view this content.</h5>
    </div>

    <div id="pdf-header" style="display: none;">
        <h2 id="pdf-viewer">PDF Viewer</h2>
        <span v-if="showAllPages"> {{ pageCount }} page(s) </span>

        <span v-else>
            <!-- @vue-ignore -->
            <button :disabled="page <= 1" @click="firstPage">❮❮</button>
            <!-- @vue-ignore -->
            <button :disabled="page <= 1" @click="decrementPage">❮</button>

            {{ page }} / {{ pageCount }}

            <!-- @vue-ignore -->
            <button :disabled="page >= pageCount" @click="incrementPage">❯</button>
            <!-- @vue-ignore -->
            <button :disabled="page >= pageCount" @click="lastPage">❯❯</button>
        </span>
        <div class="right">
            <input type="checkbox" id="checkbox" v-model="showAllPages" @click="handleShowAllPages" />
            <label for="checkbox">Show all pages</label>
        </div>

    </div>
    <div id="pdf-content" class="pdf-content">
        <!-- @vue-ignore -->
        <vue-pdf-embed 
            ref="pdfRef"
            :source="pdfSource"
            :page="page"
            @password-requested="handlePasswordRequest"
            @rendered="handleDocumentRender"
        />
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import VuePdfEmbed from 'vue-pdf-embed';
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { firebaseAuth, firebaseDb } from "../auth";

// Synced values
//
// When true the List of PDFs will display
const isLoggedIn = ref(false);
// When showing single page view this will be a number. When showing all pages this will be null
const page: Ref<number | null> = ref(1);
// Total number of pages for selected PDF
const pageCount = ref(1);
// Relative path to PDF
const pdfSource = ref('');
// Show all pages when true. Otherwise, show page number from page value.
const showAllPages = ref(false);
// Data table from firestore
const bookCollection = ref({});
// Object reference to the PDF view
const pdfRef = ref(null);

// Event handler for user sign in state change
onAuthStateChanged(firebaseAuth, async (user: any) => {
    // Used for html layout
    isLoggedIn.value = (user != null);
    // If user is logged in get the book database
    if (user != null) {
        const querySnapshot = await getDocs(collection(firebaseDb, 'Books'));
        // querySnapshot.forEach(doc => {
        //     console.log(doc.id, doc.data());
        // })
        bookCollection.value = querySnapshot.docs;
    }
});

// Go to previous page
function decrementPage(_: any) {
    if (page.value != null) {
        // @ts-ignore    
        page.value -= 1;
    }
}

function firstPage(_: any) {
    if (page.value != null) {
        page.value = 1;
    }
}

// Go to next page
function incrementPage(_: any) {
    if (page.value != null) {
        // @ts-ignore
        page.value += 1;
    }
}

function lastPage(_: any) {
    if (page.value != null) {
        page.value = pageCount.value;
    }
}

// Event handler for when a pdf link is selected
function handlePdfSelected(bookName: any, chapter: any) {
    // Generate PDF location
    pdfSource.value = `./Books/${bookName}/${chapter}`;
    // console.log(pdfSource.value);

    // Render the PDF in the viewer
    const pdfTemplate = document.getElementById('pdf-header');
    if (pdfTemplate) {
        pdfTemplate.style.display = "block";
    }

    // Logic to jump to PDF viewer
    const url = location.href;
    location.href = '#pdf-viewer'
    // The second argument can be null
    // @ts-ignore
    history.replaceState(null, null, url);
}

// Update page count variable once PDF is rendered in viewer
function handleDocumentRender(args: any) {
    if (args != undefined) {
        console.log(args)
    }
    if (pdfRef.value != null) {
        // We know this will have pageCount
        // @ts-ignore
        pageCount.value = pdfRef.value.pageCount;
    }
}

// Update page variable
function handleShowAllPages(_: any) {
    page.value = showAllPages.value ? 1 : null;
}

// Request password for PDF if there is any
function handlePasswordRequest(callback: Function, retry: boolean) {
    callback(prompt(retry ? 'Enter password again' : 'Enter password'))
}
</script>