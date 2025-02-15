// Enhanced mouse movement effect for grid items
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const image = item.querySelector('.grid-image');
    
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Smooth movement with easing
        const moveX = x * 30; // Increased movement range
        const moveY = y * 30;
        
        // Apply smooth transform with transition
        image.style.transition = 'transform 0.2s ease-out';
        image.style.transform = 
            `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });

    item.addEventListener('mouseleave', () => {
        // Smooth reset with transition
        image.style.transition = 'transform 0.3s ease-out';
        image.style.transform = 'none';
    });
});
