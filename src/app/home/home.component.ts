import { Component ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

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




    // const scrollDiv = document.querySelector('.scrollhide')as HTMLElement;

    // if (scrollDiv) {
    //   window.addEventListener('scroll', () => {
    //     const scrollTop = window.scrollY;
    //     const maxScroll = 500;
    //     const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    
    //     // Now TypeScript knows `scrollDiv` has the `style` property
    //     scrollDiv.style.opacity = newOpacity.toString();
    //   });

    // }


    const scrollDiv1 = document.querySelector('.scrollhide') as HTMLElement;
const scrollDiv2 = document.querySelector('.scrollinfo') as HTMLElement;
const scrollAbout = document.querySelector('.scrollabout') as HTMLElement;
const scrollWhy = document.querySelector('.scrollwhy') as HTMLElement; // Added scrollWhy

const maxScroll = 500; // Max scroll for opacity change
const scrollThreshold = 70; // Scroll threshold to start decreasing opacity

// Handle scroll effect for all four divs
if (scrollDiv1 && scrollDiv2 && scrollAbout && scrollWhy) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Get the scroll position

    // If scroll is below the threshold, keep all divs at full opacity
    if (scrollTop < scrollThreshold) {
      scrollDiv1.style.opacity = '1';
      scrollDiv2.style.opacity = '1';
      scrollAbout.style.opacity = '1'; // Keep scrollAbout fully opaque
      scrollWhy.style.opacity = '1'; // Keep scrollWhy fully opaque
      return; // Don't process further
    }

    // Apply easing effect: slower at first, faster after halfway
    const scrollProgress = (scrollTop - scrollThreshold) / maxScroll; // Normalize scroll position
    const easeOutProgress = Math.pow(scrollProgress, 2); // Quadratic easing for smooth speed-up

    // Calculate opacity for scrollDiv1 (first div) - starts fading after scroll exceeds threshold
    const opacity1 = Math.max(1 - easeOutProgress, 0);
    scrollDiv1.style.opacity = opacity1.toString();

    // Calculate opacity for scrollDiv2 (second div) - starts fading after first div has finished fading
    const easeOutProgress2 = Math.pow((scrollTop - maxScroll - scrollThreshold) / maxScroll, 2);
    const opacity2 = Math.max(1 - easeOutProgress2, 0);

    // Only allow opacity change for scrollDiv2 after the first div has fully faded (scrollTop >= maxScroll)
    if (scrollTop >= maxScroll + scrollThreshold) {
      scrollDiv2.style.opacity = opacity2.toString();
    } else {
      scrollDiv2.style.opacity = '1'; // Keep scrollDiv2 fully opaque until the first div has faded
    }

    // For scrollAbout: starts fading when the second div has fully faded
    const easeOutProgress3 = Math.pow((scrollTop - (maxScroll * 2) - scrollThreshold) / maxScroll, 2);
    const opacity3 = Math.max(1 - easeOutProgress3, 0);

    // Only allow opacity change for scrollAbout after the second div has fully faded
    if (scrollTop >= (maxScroll * 2) + scrollThreshold) {
      scrollAbout.style.opacity = opacity3.toString();
    } else {
      scrollAbout.style.opacity = '1'; // Keep scrollAbout fully opaque until the second div has faded
    }

    // For scrollWhy: starts fading when the third div has fully faded
    const easeOutProgress4 = Math.pow((scrollTop - (maxScroll * 3) - scrollThreshold) / maxScroll, 2);
    const opacity4 = Math.max(1 - easeOutProgress4, 0);

    // Only allow opacity change for scrollWhy after the third div has fully faded
    if (scrollTop >= (maxScroll * 3) + scrollThreshold) {
      scrollWhy.style.opacity = opacity4.toString();
    } else {
      scrollWhy.style.opacity = '1'; // Keep scrollWhy fully opaque until the third div has faded
    }
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






  // Scroll Left Method
  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300, // Scroll 300px to the left
      behavior: 'smooth' // Smooth scrolling effect
    });
  }

  // Scroll Right Method
  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300, // Scroll 300px to the right
      behavior: 'smooth' // Smooth scrolling effect
    });
  }





  backphoto:string="assets/img/giphy (1).webp"
  schoolback:string="assets/img/schoolback.jpg"
  rentback:string="assets/img/rentback.JPG"
  mobiless:string="assets/img/ss.png"
  schoolss:string="assets/img/Swebss.png"
  vinitpic:string="assets/img/vinit_photo.jpg"
  sideimg:string="assets/img/vinitside.png"
  linkedin:string="assets/img/linkedin.png"
  github:string="assets/img/github.png"
  email:string="assets/img/email.png"
  python:string="assets/img/python.jpeg"
  django:string="assets/img/django.jpg"
  angular:string="assets/img/angular.jpg"
  mysql:string="assets/img/mysql.jpg"
  ionic:string="assets/img/ionic.jpg"
  git:string="assets/img/git.jpg"

}
