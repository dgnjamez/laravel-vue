function handleSideBar(status) {
    isCheckScreenSize(status)

    window.addEventListener('resize', function () {
        isCheckScreenSize($('#app').width() > 768)
    })

    function isCheckScreenSize(status) {
        if (!$('#sidebar').hasClass('no-sidebar')) {
            if (!status) {
                $('#sidebar').addClass('isclose')
                $('#content').addClass('handle-sideclose')
            } else {
                $('#sidebar').removeClass('isclose')
                $('#content').removeClass('handle-sideclose')
            };
        }
    }
}

export {
    handleSideBar
}