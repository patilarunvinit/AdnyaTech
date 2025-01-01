import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  schooldis:any;
  rentdis:any;

  ngOnInit(): void {

    
    // Select elements in ngOnInit
    const schoolLinks = document.querySelectorAll<HTMLAnchorElement>('.school, .mrent');
    const selecteschool = document.querySelector<HTMLDivElement>('.selecteschool');
    const selecterent = document.querySelector<HTMLDivElement>('.selecterent');
    const maingif = document.querySelector<HTMLImageElement>('.maingif');
  

    if (selecteschool) {
      schoolLinks.forEach((schoolLink) => {
        // Add event listener for mouseover (hover)
        schoolLink.addEventListener('mouseover', () => {
          // Show the .selectedoption element
          // selectedOption.style.display = 'block'; 
          
          if (maingif) {
            // Hide the image when hovering
            maingif.style.display = 'none'; 
          }

          // Change the image source based on the class of the hovered link
          if (schoolLink.classList.contains('school')) {
            // Change the image to school-related one
            if (maingif) {
              this.schooldis = 'block'
              this.rentdis = 'none'
              selecteschool.style.display = 'block';
              if(selecterent){ 
                selecterent.style.display = 'none'; }
            }
          } else if (schoolLink.classList.contains('mrent')) {
            // Change the image to rent-related one
            if (maingif) {
              this.rentdis = 'block'
              this.schooldis = 'none'
              selecteschool.style.display = 'none';
              if(selecterent){  
                selecterent.style.display = 'block'; }
            }
          }
        });

        // Add event listener for mouseout (when hover ends)
        schoolLink.addEventListener('mouseout', () => {
          // Hide the .selectedoption element when the mouse leaves
          selecteschool.style.display = 'none';
          if(selecterent){ 
            selecterent.style.display = 'none'; }

          
          if (maingif) {
            maingif.style.display = 'block';
            this.rentdis = 'none'
            this.schooldis = 'none' 
          }
        });
      });
    }




    const scrollDiv = document.querySelector('.scrollhide')as HTMLElement;

    if (scrollDiv) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const maxScroll = 500;
        const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    
        // Now TypeScript knows `scrollDiv` has the `style` property
        scrollDiv.style.opacity = newOpacity.toString();
      });

    }
  }
  


  schdisplay:any= 'none'
  schoolbutton(event: MouseEvent): void {
    event.preventDefault();  // Prevents the default action (page reload or navigation)
    this.schdisplay = 'block'
  }

  boxStyle: any = {
    width: '100%',
    height: '100vh',
  };
  menuhide:any = 'block'
  menubutton(event: MouseEvent): void {
    event.preventDefault();
    this.boxStyle = {
      width: '30%',
      height: '90vh',
      top:'5%',
      left: '35%',
      position: 'absolute'
    };

    this.menuhide = 'none'
    this.closehide = 'block'
  
  }

  closehide:any = 'none'
  closebutton(event: MouseEvent): void {
    event.preventDefault();
    this.menuhide = 'block';
    this.boxStyle = {
      width: '100%',
      height: '100vh',
    };
    this.closehide = 'none'
  }


  backphoto:string="assets/img/giphy (1).webp"
  schoolback:string="assets/img/schoolback.jpg"
  rentback:string="assets/img/rentback.JPG"
  mobiless:string="assets/img/ss.png"
  schoolss:string="assets/img/Swebss.png"
  vinitpic:string="assets/img/vinit_photo.jpg"
}
