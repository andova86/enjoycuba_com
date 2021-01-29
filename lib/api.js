//Para trabajar local
//const main_url = 'http://127.0.0.1:3000/api/'

const main_url = 'https://enjoycuba-com.vercel.app/api/'

export async function getAllDestinations() {
  const data = await fetch(main_url + 'hotel/');
  const json = await data.json()


  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }


  return json

}

export async function getAllDestacadosByCategoria(categoria) {
  const data = await fetch(main_url + `destacados/${categoria}`);
  const json = await data.json()


  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }


  return json

}

export async function getAllPersonalizados() {
  const data = await fetch(main_url + `personalizados/`);
  const json = await data.json()


  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }


  return json

}

/*async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch('http://127.0.0.1:3000/api', {
    method: 'POST',
    /!*headers: {
      'Content-Type': 'application/json',
      Token: process.env.STORYBLOK_API_KEY,
      Version: preview ? 'draft' : 'published',
    },*!/
    body: JSON.stringify({
      query
    }),

  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}*/

/*export async function getPreviewPostBySlug(slug) {
  const post = await fetchAPI(
    `
  query PostBySlug($slug: ID!) {
    PostItem(id: $slug) {
      slug
    }
  }
  `,
    {
      preview: true,
      variables: {
        slug: `posts/${slug}`,
      },
    }
  )
  return post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      PostItems {
        items {
          slug
        }
      }
    }
  `)
  return data?.PostItems.items
}*/




/*
export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: ID!) {
    PostItem(id: $slug) {
      slug
      published_at
      first_published_at
      id
      content {
        long_text
        intro
        title
        image
        author {
          name
          content
        }
      }
    }
    PostItems(per_page: 3, sort_by: "first_published_at:desc") {
      items {
        slug
        published_at
        first_published_at
        content {
          long_text
          intro
          title
          image
          author {
            name
            content
          }
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        slug: `posts/${slug}`,
      },
    }
  )

  return {
    post: data?.PostItem,
    morePosts: (data?.PostItems?.items || [])
      .filter((item) => item.slug !== slug)
      .slice(0, 2),
  }
}*/
