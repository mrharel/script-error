function onGlobalError(error) {
    console.log("Global Error filename", error.filename);
    console.log("Global Error", error);
}

function main() {
    console.log("App i starting!");
    window.addEventListener('error', onGlobalError);
    setTimeout(() => triggerInternalError(), 100);
    setTimeout(() => triggerExternalError(), 3000);
    triggerExternalError();

}
// try {
//     main();
// } catch (error) {
//     console.log("Catch: ", error);
//     console.log("Catch filename", error.filename);
// }

main();


