import React from 'react'
import "./style.module.scss"

function Sidebar() {
  return (
      <nav className='sidebar'>
          <div className="logo">
              <li>
                  <img src="../src/img/Fox.webp" alt="" srcset="" />
              </li>
          </div>
          <div className="items">
              <ul>
                  <li>
                      <i class='bx bx-grid-alt'></i>
                      <p>Dashboard</p>
                  </li>
                  <li>
                      <i class='bx bx-movie'></i>
                      <p>Entertainament</p>
                  </li>
                  <li>
                      <i class='bx bx-group'></i>
                      <p>Social Media</p>
                  </li>
                  <li>
                      <i class='bx bx-code-block'></i>
                      <p>SEO Tools</p>
                  </li>
                  <li>
                      <i class='bx bx-shopping-bag'></i>
                      <p>Ecommerce</p>
                  </li>
                  <li>
                      <i class='bx bx-equalizer'></i>
                      <p>Songs</p>
                  </li>

              </ul>
          </div>
          <div className="config">
              <ul>
                  <li>
                      <i class='bx bx-cog'></i>
                      <p>Settings</p>
                  </li>
                  <li>
                      <i class='bx bx-exit' ></i>
                      <p>Logout</p>
                  </li>

              </ul>
          </div>

      </nav>
  )
}

export default Sidebar