# Read me - Group 06

## Goal
We chose UN sustainable goal number 15 – Life On Land
(The research was done mainly on https://sdgs.un.org/goals/goal15)

As a group we decided this would be an interesting and relevant goal for this circumstance. We started by briefly sketching out some ideas about what story we wanted to tell. First we used sketches and brainstorming to come up with ideas quick, that we could further develop later in the process.

## The Idea
Our story landed on a group of friends heading to vacation, on their way they see different environments along the way. Although they see out of the car, they are mostly focused on getting to their destination. In the car the radio is playing, and a radio host starts talking about different things to put to consideration when being a tourist this summer. The group drive by different kinds of environments, corresponding to the things the radio host tries to communicate. This puts everything into perspective for the friend group, because when they arrive to their destination, the environment is gorgeous. Therefore, they understand the importance of being a thoughtful tourist and leaving the nature the way you found it. 

## Creating the components
The layout and theme were sketched out in illustrator. There we extracted the svg's we needed to make a cohesive design. Some of the components is downloaded from Adobe Stock (royalty free designs), but it is mostly conducted by us. After the svg components where created, we mocked up a storyboard with all the different scenes and how we ideally wanted it to look. This gave us an overview of the story and components while coding.  We found it easiest to create a long svg with the corresponding parts of the different scenes. It made a lot more effective in the code and the overall look was a bit cleaner in our case. 

## Html structure
In the structure of the html we have added in the body we have some static images which is the clouds, background and road svg's. Then we added a container for sections called palm-view. Inside them are section which is where the comments are. And then some more static images under everything.

## Posisioning and responsiveness
Here is not much to say other than we have tried to make the positioning of the svg's fit the best as possible and made some drawings, coloring and animation on it.

## Script
The script works like this. We started by selecting an element called ".palm-view" and all elements with class ".palm-section". Then added a wheel event listener to the window so we can determine the direction of the scroll. AFter we made the scroll go horizontally. Created an IntersectionObserver to track visibility changes of sections f.eks when one is in view, change background color based on section class. Under that is a code which resets opacity of child element when not in view. Last is code which Observe visibility changes for each section.


