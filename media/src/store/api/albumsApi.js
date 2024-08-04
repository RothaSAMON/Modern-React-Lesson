import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

//Dev only!!
//This function is make a tiny little pause for us, it gonna delay handling for testing
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',

        //This function is garbage that use for the testing slow
        fetchFn: async(...args) => {
            await pause(2000);
            return fetch(...args);
        }
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.userId }];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    };
                }
            }),

        // mutation : is going to tell redux query how to make request that is going to change some data
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            //Code below is the randomly title name :
                            title: faker.commerce.productName()
                        }
                    };
                }
            }),

            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return { type: 'Album', id: user.id }
                    });
                    tags.push({ type: 'UsersAlbums', id: user.id });
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                }
            })
        };
    },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };