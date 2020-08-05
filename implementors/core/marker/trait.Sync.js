(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; Sync for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for PrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Utf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for AlignedVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumIterSingleChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumIterSingleChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumIterManyChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumIterManyChunkNullCheck&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Utf8IterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Utf8IterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Utf8IterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Utf8IterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for BooleanIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for BooleanIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumTakeRandomChunked&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumTakeRandomCont&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for NumTakeRandomSingleChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Utf8TakeRandom&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Utf8TakeRandomSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for BoolTakeRandom&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for BoolTakeRandomSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Utf8Type","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for AnyType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for PolarsError","synthetic":true,"types":[]},{"text":"impl Sync for DataFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for GroupBy&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Sync for CsvWriter&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for CsvReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for JsonReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Series","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()