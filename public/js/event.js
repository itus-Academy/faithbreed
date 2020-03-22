
const eventAndProgrammes = document.getElementById('eventAndProgrammes');
eventAndProgrammes.addEventListener('submit', submitEventForm);
function saveMessager(programmeName, programmeDate, programmeContent, imageprogrammelink) {
    db.collection('event').add({
        programmeName: programmeName,
        programmeDate: programmeDate,
        programmeContent: programmeContent,
        imageprogrammelink:imageprogrammelink
    }).then(function () {
        console.log('the event stuff has updated successfully');
    })


}

function submitEventForm(e) {
    e.preventDefault();
    const programmeName = document.getElementById('programmeName').value;
    const programmeDate = document.getElementById('programmeDate').value;
    const programmeContent = document.getElementById('programmeContent').value;
    const imageprogrammelink = document.getElementById('imageprogrammelink').value;
    console.log(programmeName);
    saveMessager(programmeName, programmeDate, programmeContent, imageprogrammelink);
}



