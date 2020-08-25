/****
 * EXPERIENCE ACCELERATOR
 * Sample audience filter.
 * Note: (await evolv.runtime) is not compatible with IE 11
 ****/
 
evolv.context.update({
    company: ($("meta[content='3614852']").length === 1) ? "ADP" : "OTHER"
});
