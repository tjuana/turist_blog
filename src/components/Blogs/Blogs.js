 import React, { useEffect, useState } from 'react'
 import { connect } from 'react-redux'
 import { Link } from 'react-router-dom'
 import { actions, selectors } from '../../__data__'
 import BlogItem from './BlogItem'
 
const Blogs = ({loadContent, blogs, loaded}) => {
     const [isLoaded, setState] = useState(false)
     const url = 'http://localhost:8000/wp-json/wp/v2/turists'

     useEffect(() => {
         if (!loaded) {
            loadContent(url)
         }
     }, [loadContent, loaded])

         if (loaded) {

         return (
             <div>
                <Link to='/main'> go back </Link>
                 {blogs.map( blog => (
                     <BlogItem
                        blog={blog}
                        key={blog.id}
                     >
                     </BlogItem>
                 ))}
             </div>
         )}
         
         return <h3>Loading...</h3>
     }

const mapStateToProps = (state) => ({
    blogs: selectors.getData(state),
    loaded: selectors.getLoading(state),
})

const mapDispatchToProps = {
    loadContent: actions.loadContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
