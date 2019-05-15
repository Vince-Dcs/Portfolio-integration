<article <?php post_class(); ?>>
    
    <h1 class="post__title"><?php the_title(); ?></h1>
    <p class="post__content"> <?php the_content(); ?></p>
    <?php the_post_thumbnail(
    'post-thumbnail',
    [
        'class' => 'post__image'
    ]
    ); ?>
</article>

