
"use client";

// This file is kept minimal as Server Actions are not supported in static exports.
// For static deployments like GitHub Pages, logic should be handled client-side.

export async function submitContactForm(data: any) {
  // Static placeholder for contact form logic
  console.log("Static export: Form logic should be handled by a third-party service like Formspree or a mailto link.", data);
  return { success: true, message: "This is a static site. Use the direct contact links provided." };
}
