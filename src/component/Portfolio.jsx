import React from "react";

function Portoflio(){
    return(
        <section id="portfolio">
        <div className="dark:bg-dark-black dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28">
        
    
        <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black dark:text-white">
            <div>
            <h1 className="text-3xl font-bold mb-6">
                Project
            </h1>
            </div>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-fit lg:grid-cols-3 lg:gap-x-8 lg:px-6">
                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img src="https://via.placeholder.com/150" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" /> */}
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" /> */}
                    </div>
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" /> */}
                    </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                    <img src="https://via.placeholder.com/150" alt="Model wearing plain white basic tee." className="rounded h-full w-full object-cover object-center" />
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="rounded h-full w-full object-cover object-center" /> */}
                </div>
                </div> 

                {/* <img src="https://i.pinimg.com/originals/f8/e3/95/f8e395b6785428be9450d570bf48bf09.png" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="object-fill h-100 w-500 rounded-lg bg-gray-100" /> */}
                <div className="mx-auto max-w-2xl pt-10 pb-16 sm:px-6 lg:grid lg:max-w-fit lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Website projects</h1>
                </div>

                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    

                    {/* <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">

                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>

                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>

                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>

                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>

                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <p className="sr-only">4 out of 5 stars</p>
                        
                    </div>
                    </div> */}


                    <div>
                        <h3 className="text-sm font-medium text-gray-900">Color</h3>

                        <fieldset className="mt-4">
                        <legend className="sr-only">Choose a color</legend>
                        <div className="flex items-center space-x-3">

                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                            <span id="color-choice-0-label" className="sr-only"> White </span>
                            <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                            </label>


                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                            <span id="color-choice-1-label" className="sr-only"> Gray </span>
                            <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                            </label>


                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                            <span id="color-choice-2-label" className="sr-only"> Black </span>
                            <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                            </label>
                        </div>
                        </fieldset>
                    </div> 

                    <div className="mt-5">
                        <h3 className="text-sm font-medium text-gray-900">Source</h3>
                        <button className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">GitHub</button>
                    </div>

                    {/*<div className="mt-10">
                        <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                        
                        </div>

                         <fieldset className="mt-4">
                        <legend className="sr-only">Choose a size</legend>
                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                            <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                            <span id="size-choice-0-label">XXS</span>

                            <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                            <span id="size-choice-1-label">XS</span>


                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                            <span id="size-choice-2-label">S</span>


                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                            <span id="size-choice-3-label">M</span>

                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                            <span id="size-choice-4-label">L</span>

                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                            <span id="size-choice-5-label">XL</span>

                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                            <span id="size-choice-6-label">2XL</span>


                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>


                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                            <span id="size-choice-7-label">3XL</span>


                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                        </div>
                        </fieldset>
                    </div> */}

                    {/* </form> */}
                    
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                    <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                    </div>
                    </div>

                    <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                    <div className="mt-4">
                        <div role="list" className="list-disc space-y-2 pl-4 text-sm">
                        <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>

                        <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>

                        <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                        <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                        </div>
                    </div>
                    </div>

                    <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
        </section>
    )
}

export default Portoflio;