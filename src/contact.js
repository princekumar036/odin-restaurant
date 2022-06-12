


function createContact() {
    const section = document.createElement('section')
    section.classList.add('contact')

    section.innerHTML = `
    <div>
        <p>
            <i class="mdi mdi-map-marker"></i>
            <span>1024 Oakwood Ave</span>
            <span>San Diego, CA 22434</span>
        </p>
        <p>
            <i class="mdi mdi-clock"></i>
            <span>Mon-Thurs: 8am-8pm</span>
            <span>Fri-Sun: 8am-11pm</span>
        </p>
        <p>
            <i class="mdi mdi-phone"></i>
            <span>+1 403-392-3046</span>
        </p>
        <p>
            <i class="mdi mdi-email"></i>
            <span>eat@tribeflatout.com</span>
        </p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.867762785019!2d-118.46850727325761!3d33.99593021863831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bac1c3bed645%3A0x38aaab28ce9c2229!2s1024%20Oakwood%20Ave%2C%20Venice%2C%20CA%2090291%2C%20USA!5e0!3m2!1sen!2sin!4v1654976036048!5m2!1sen!2sin" width="900" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `

    return section
}

export default createContact