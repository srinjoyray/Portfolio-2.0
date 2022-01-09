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
            projects {
                description
                featuredProject
                github
                live
                title
                technology
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
            projects(where: {featuredProject:true}) {
                description
                featuredProject
                github
                live
                title
                technology
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