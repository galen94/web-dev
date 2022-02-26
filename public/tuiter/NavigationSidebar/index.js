/* eslint-env jquery */


const NavigationSidebar = (active) => {

    return(`

            <ul id="main-nav" class="list-group wd-list-style">
                <li><a href="#" class="list-group-item " >
                    <i class="fab fa-twitter"></i></a>
                    <a href="../HomeScreen/home.html" class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}">
                    <i class="fa fa-home"></i>
                    <span class="wd-hide-words">Home</span></a>
                </li>
               <li> <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action  ${active === 'explore' ? 'active' : ''}">
                    <i class="fa fa-hashtag"></i>
                    <span class="wd-hide-words">Explore</span></a>
                    </li>
               <li> <a href="#" class="list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}">
                    <i class="fa fa-bell"></i>
                    <span class="wd-hide-words">Notifications</span></a>
                    </li>
               <li> <a href="#" class="list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}">
                    <i class=" fa fa-envelope"></i>
                    <span class="wd-hide-words">Messages</span></a>
                    </li>
                <li><a href="#" class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}">
                    <i class="  fa fa-bookmark"></i>
                    <span class="wd-hide-words">Bookmarks</span></a>
                    </li>
               <li> <a href="#" class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}">
                    <i class=" fa fa-list"></i>
                    <span class="wd-hide-words">Lists</span></a>
                    </li>
               <li> <a href="#" class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}">
                    <i class=" fa fa-user"></i>
                    <span class="wd-hide-words">Profile</span></a>
                    </li>
                <li><a href="#" class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}">
                    <i class=" fa fa-circle"></i>
                    <span class="wd-hide-words">More</span></a>
                    </li>
            <!-- continue the rest of the list -->
            </ul>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

       `);
}
export default NavigationSidebar;
