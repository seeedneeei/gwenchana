function answer(choice) {
    if (choice === 'yes') {
        document.getElementById('scene1').classList.add('hidden');
        document.getElementById('scene2').classList.remove('hidden');
    } else if (choice === 'no') {
        document.getElementById('scene1').classList.add('hidden');
        document.getElementById('scene3').classList.remove('hidden');
    }
}
