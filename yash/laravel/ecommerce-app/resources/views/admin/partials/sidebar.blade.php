<!-- Sidebar menu-->
<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar">
    <div class="app-sidebar__user"><img class="app-sidebar__user-avatar"
            src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Image">
        <div>
            <p class="app-sidebar__user-name">John Doe</p>
            <p class="app-sidebar__user-designation">Frontend Developer</p>
        </div>
    </div>
    <ul class="app-menu">
        <li>
            <a class="app-menu__item active" href="dashboard.html">
                <i class="app-menu__icon bi bi-speedometer"></i>
                <span class="app-menu__label">Dashboard</span>
            </a>
        </li>
        <li class="treeview">
            <a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon bi bi-people"></i>
                <span class="app-menu__label">Users</span>
                <i class="treeview-indicator bi bi-chevron-right"></i>
            </a>
            <ul class="treeview-menu">
                <li>
                    <a class="treeview-item" href="#"><i class="icon bi bi-circle"></i> Admin Users</a>
                </li>
                <li>
                    <a class="treeview-item" href="#" target="_blank" rel="noopener noreferrer"><i
                            class="icon bi bi-circle"></i> Roles</a>
                </li>
                <li>
                    <a class="treeview-item" href="#"><i class="icon bi bi-circle"></i> Permissions</a>
                </li>
            </ul>
        </li>


        <li>
            <a class="app-menu__item" href="#"><i class="app-menu__icon bi bi-gear"></i>
                <span class="app-menu__label">Settings</span>
            </a>
        </li>

    </ul>
</aside>