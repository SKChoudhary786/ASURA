document.addEventListener('DOMContentLoaded', () => {
    const members = [
        { name: 'Member 1', img: 'path/to/member1.jpg' },
        { name: 'Member 2', img: 'path/to/member2.jpg' },
        { name: 'Member 3', img: 'path/to/member3.jpg' },
        // Add more members as needed
    ];

    const memberContainer = document.querySelector('.member-cards');
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `<img src="${member.img}" alt="${member.name}">`;
        memberContainer.appendChild(card);
    });
});
