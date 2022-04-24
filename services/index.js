import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getAbout = async () => {
    const query = gql`
        query MyQuery {
            homes() {
            bio
            tagline
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.homes[0];
};


export const getProjects = async () => {
    const query = gql`
        query MyQuery {
            projects(orderBy: order_ASC) {
                description
                featuredProject
                github
                live
                title
                technology
                order
                image {
                    url
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.projects;
};

export const getFeaturedProjects = async () => {
    const query = gql`
        query MyQuery {
            projects(where: {featuredProject:true}, orderBy: order_ASC) {
                description
                featuredProject
                github
                live
                title
                technology
                order
                image {
                    url
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.projects;
};


export const getAchievements = async () => {
    const query = gql`
    query MyQuery {
            achievements(orderBy : date_DESC) {
                date
                description
                title
                url
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.achievements;
};


export const getBlogs = async () => {
    const query = gql`
    query MyQuery {
        blogs(orderBy: createdAt_DESC) {
          excerpt
          link
          slug
          title
          featuredImage {
            url
          }
        }
    }
    `;

    const result = await request(graphqlAPI, query);
    return result.blogs;
};
